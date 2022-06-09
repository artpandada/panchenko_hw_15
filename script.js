'use strict';

const arrFilms = [
    {
        name: 'Pulp Fiction',
        genre: ['crime', 'drama'],
        year: 1994
    },
    {
        name: 'Untouchables',
        genre: ['comedy', 'drama', 'biography'],
        year: 2011
    },
    {
        name: "Schindler's List",
        genre: ['history', 'drama', 'biography', 'war'],
        year: 1993
    },

]

function Films(arr) {

    arr.reduce((filmsMap, film) => {

        const genreArr = film['genre'];

        for (let nameGenre of genreArr) {
            if (!this[nameGenre]) {
                this[nameGenre] = [];
            }
            this[nameGenre].push(film);
        }
    }, {});


    this[Symbol.iterator] = function () {

        const values = Object.values(this).reduce((result, arr) => {

            for (let i = 0; i < arr.length; i++) {

                let available = true;

                for (let j = 0; j < result.length; j++) {

                    if (result[j]['name'] === arr[i]['name']) {
                        available = false;
                        break;
                    }
                }
                if (available === true) {
                    result.push(arr[i]);
                }
                return result;
            }
        }, []);

        let valueIndex = 0;

        return {
            next() {


                if (valueIndex === values.length) {
                    return {done: true};
                }


                return {
                    done: false,
                    value: values[valueIndex++]
                }
            }

        }

    }


}

let myFilms = new Films(arrFilms);

for (let x of myFilms) {
    console.log(x)
}
