        const pressed = [];
        const secretCode = [
            'ArrowUp',
            'ArrowUp',
            'ArrowDown',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'ArrowLeft',
            'ArrowRight',
            'b',
            'a',
        ];


        window.addEventListener('keyup', (e) => {
            console.log(e.key);
            pressed.push(e.key);
            console.log(pressed);
        });