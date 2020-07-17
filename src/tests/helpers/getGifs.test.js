import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';


describe('prueba componente <getGifs />', () => {

    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch Man');

        expect( gifs.length ).toBe( 10 )
    })

    test('debe comprobar si category esta vacio', async () => {
        const gifs = await getGifs('');

        
        expect( gifs.length ).toBe( 0 )
    })
    
})
