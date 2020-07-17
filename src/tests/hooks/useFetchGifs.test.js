import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch Man') );
        const { data, loading } = result.current;

        await waitForNextUpdate()

        expect( data ).toEqual([]);
        expect( loading ).toBe( true )
        
    })

    test('debe retornar un arreglo de img y loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch Man') );
        await waitForNextUpdate()

        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toBe( false )
    })
    
    
    
})
