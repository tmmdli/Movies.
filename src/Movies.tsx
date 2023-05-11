import React, { useRef, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { } from 'react-test-renderer';

const apiUrl = 'https://api.tvmaze.com/search/shows?q='

const Movies = () => {
    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);
    const scrollRef = useRef(null);




    const onGetData = async () => {
        const response = await fetch(apiUrl + value, { method: 'GET', });
        const result = await response.json();
        console.log(result[0]);
        setMovies(result);
    };
    const onChangeText = (text: string) => {
        setValue(text);
    };

    const Clear = () => {
        setValue('');
        setMovies([]);
    }



    return (

        <View>
            <View style={styles.continer}>
                <Text style={styles.moviestext}> MOViES</Text>
            
                    
                    <TextInput
                        style={styles.input}
                        value={value}
                        placeholder="Click to search..."
                        placeholderTextColor='gray'
                        onChangeText={onChangeText} >

                    </TextInput>
                <TouchableOpacity
                    onPress={onGetData}>
                    <Text style={styles.text}>Click </Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => Clear () } >
                        <Image style={styles.clear} source={require('./clearr.png')} />
                    </TouchableOpacity>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => scrollRef.current?.scrollTo({ y: 0 })}>
                        <Image style={styles.arrow} source={require('./arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => scrollRef.current?.scrollToEnd()}>
                        <Image style={styles.down} source={require('./downn.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView ref={scrollRef}>
                    {movies?.map((item, index) => (
                        <View key={index}>
                            <Image style={styles.imagemovie} source={{ uri: item.show.image?.medium }} />
                            <Text
                                style={styles.film}>{item.show.name}</Text>
                        </View>

                    ))}
                </ScrollView>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({


    moviestext: {
        fontSize: 60,
        color: 'black',
        fontWeight: 'bold',
        height: 200,
        alignSelf: 'center',
        top: 10


    },
    input: {
        top: -35,
        width: '100%',
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 1,
        fontSize: 30,
        fontWeight: '500',
        marginTop: -30

    },

    text: {
        fontSize: 33,
        color: 'black',
        alignSelf: 'center',
        top: -25

    },
    icon: {
        width: 60,
        height: 80,
        alignSelf: 'flex-end',
        left: -5,
        top: -30


    },
    arrow: {
        height: 40,
        width: 40,
        alignSelf: 'flex-end'


    },
    down: {
        height: 40,
        width: 40,
        alignSelf: 'flex-end'


    },
    clear: {
        height: 40,
        width: 40,
        alignSelf: 'flex-end',
        top:-130
    },

    film: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        alignSelf: 'center'

    },
    imagemovie: {
        width: 360,
        height: 400,
        resizeMode: 'stretch',
        alignSelf: 'center'
    }



})

export default Movies;

