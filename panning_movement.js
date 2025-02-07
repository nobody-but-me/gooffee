(() => {
    
    const _panning_container = document.getElementById("panning-container");
    const _panning_content   = document.getElementById("house");
    const _distance        = 150;
    const _scrolling_speed = 10;
    
    var _mouse_x = 0;
    var _mouse_y = 0;

    var _translate_x = 0, _translate_y = 0;
    var _dragging   = false;
    var _start_x, _start_y;
    
    function _get_mouse_event(event) {
	_mouse_x = event.clientX;
	_mouse_y = event.clientY;
    }
    function _screen_movement(event) {
	
	const _window_width = window.innerWidth;
	const _window_height = window.innerHeight;
	
	if (_mouse_x < _distance) {
            window.scrollBy(-_scrolling_speed, 0);
	}
	else if (_mouse_x > _window_width - _distance) {
            window.scrollBy(_scrolling_speed, 0);
	}
	
	if (_mouse_y < _distance) {
            window.scrollBy(0, -_scrolling_speed);
	}
	else if (_mouse_y > _window_height - _distance) {
            window.scrollBy(0, _scrolling_speed);
	}
    }
    document.addEventListener('mousemove', _get_mouse_event);
    setInterval(function() {
	_screen_movement();
    }, 10);
    
})();
