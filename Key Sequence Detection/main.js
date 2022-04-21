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

        const equalArray = (arr1, arr2) => {
            if (arr1.length != arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        window.addEventListener('keyup', (e) => {
            console.log(e.key);
            pressed.push(e.key);
            console.log(pressed);

            pressed.splice(-secretCode.length - 1,
                pressed.length - secretCode.length
            );

            equalArray(pressed, secretCode) && cornify_add();
        });