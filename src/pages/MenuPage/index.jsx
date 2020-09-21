import React from 'react';
import { getUserDetails, getGuilds } from '../../utils/api';
import { MenuComponent } from '../../components'
import { useQuery } from '@apollo/client';
import { menuPageQuery } from '../../grpahql/queries';
import { Flex, Spinner,Box} from '@chakra-ui/core';

export function MenuPage ( {
    history,
} ) {

    const { loading, error, data} = useQuery(menuPageQuery);

    // const [user, setUser] = React.useState( null );
    // const [loading, setLoading] = React.useState( true );
    // const [guilds, setGuilds] = React.useState([]);

    // React.useEffect ( () => {
    //     getUserDetails()
    //         .then(({data}) => {
    //             console.log(data)
    //             setUser ( data );
    //             return getGuilds();
    //         }).then(
    //             ({data}) =>{
    //                 console.log(data)
    //                 setGuilds(data);
    //                 setLoading( false )
    //         }).catch( (err) => {
    //             history.push('/')
    //             setLoading( false )
    //         })
    // },[])

    if(!loading && !error) { 
        const { getMutualGuilds } = data;

        if(!getMutualGuilds){
            history.push('/')
            return(
                null
            )
        }

        return (

            <Flex minH='98vh' w='100%' direction='column' paddingX='15%' paddingTop='2%'>
                <MenuComponent guilds={ getMutualGuilds } />
            </Flex>
        )
    }return(
        <Flex minH='98vh' w='100%' direction='column' justify='center' align='center'>
            <Spinner
            cursor='progress'
            thickness="4px"
            speed="0.65s"
            emptyColor="#00000000"
            color="blue.500"
            size="xl"
            />
        </Flex>
    )

    // return !loading && (
    //     <div>
    //         <h1>Menu Page UWU</h1>
    //         <MenuComponent guilds={ guilds }/>
    //     </div>
    // );


}