import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from './bll/loadingReducer';
import preloader from './bll/Spinner-2.gif';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        // console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {isLoading
                ?
                <div>
                    <img src={preloader}/>
                </div>
                : (
                    <div>
                        <SuperButton
                            onClick={setLoading}>
                            set loading...
                        </SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
