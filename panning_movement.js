(() => {
    
    var _is_mouse_pressed = false;
    var _initial_scroll_x = 0;
    var _initial_scroll_y = 0;
    var _initial_mouse_x  = 0;
    var _initial_mouse_y  = 0;
    
    function _is_mouse_down(event) {
	if (event.button === 0) {
            _is_mouse_pressed = true;
	    
            _initial_scroll_x = window.scrollX;
            _initial_scroll_y = window.scrollY;
            _initial_mouse_x = event.clientX;
            _initial_mouse_y = event.clientY;
	    
            document.body.style.cursor = "grabbing";
	}
    }
    function _is_mouse_up(event) {
	if (event.button === 0) {
            _is_mouse_pressed = false;
            document.body.style.cursor = "default";
	}
    }
    
    function _screen_movement(event) {
	if (_is_mouse_pressed) {
            const _delta_x = _initial_mouse_x - event.clientX;
            const _delta_y = _initial_mouse_y - event.clientY;
	    
            window.scrollTo(_initial_scroll_x + _delta_x, _initial_scroll_y + _delta_y);
	}
    }
    document.addEventListener('mousemove', _screen_movement);
    document.addEventListener('mousedown', _is_mouse_down);
    document.addEventListener('mouseup',   _is_mouse_up);
})();
