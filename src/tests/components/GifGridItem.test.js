import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('prueba <GifGridItem />', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe mostar el componente <GifGridItem /> correctamente', () => {


        expect(wrapper).toMatchSnapshot()
    })
    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe( true )
    })
    
    
    
    




})
