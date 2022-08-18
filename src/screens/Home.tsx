import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getAllVideos } from '../api/video';
import Slide from '../components/home/Slide';

export const Home = () => {

    const [slideList, setSlideList] = useState<IVideo[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState<number>(0);

    const getVideos = async (pageNumber: number) => {
        try {
            const response: AxiosResponse<IResponseData> = await getAllVideos(pageNumber);
            return response.data;
        } catch (error) {
            console.log('error->', error);
        }
    }

    useEffect(() => {
        addPart('first');
    }, []);

    useEffect(() => {
        console.log('slideList-->', slideList?.length);
    }, [slideList]);

    const addPart = async (type: string) => {
        if (type === 'first') {
            const res: any = await getVideos(currentPage);
            setCurrentPage(res.current_page);
            setLastPage(res.last_page);
            setSlideList(res.data);
        } else if (type === 'next') {
            if (currentPage !== 1) {
                await removeItems('forward');
            }
            const res: any = await getVideos(currentPage + 1);
            setCurrentPage(res.current_page);
            setSlideList([...slideList, ...res.data]);
        } else if (type === 'prev') {
            console.log('currentPage-->', currentPage);
            const res: any = await getVideos(currentPage - 2);
            setCurrentPage(currentPage - 1);
            setSlideList([...res.data, ...slideList]);
            setCurrentSlide(currentSlide + 10);
            await removeItems('back');
        }
    }

    const removeItems = (type: string) => {
        if (type === 'forward') {
            for (let index = 0; index < 10; index++) {
                slideList?.shift();
            }
        } else if (type === 'back') {
            for (let index = 0; index < 10; index++) {
                slideList?.pop();
            }
        }
    }

    useEffect(() => {
        console.log('currentSlide-->', currentSlide);
        if (currentSlide === (slideList.length - 1) && currentPage < lastPage) {
            addPart('next');
        } else if (currentSlide === 0 && currentPage !== 1) {
            addPart('prev');
        }
    }, [currentSlide]);

    return (
        <FlatList
            data={slideList}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => {
                return <Slide data={item} shouldPlay={currentSlide === index} />;
            }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
                let contentOffset = e.nativeEvent.contentOffset;
                let viewSize = e.nativeEvent.layoutMeasurement;
                if (contentOffset.y === 0) {
                    setCurrentSlide(0);
                }
                else {
                    setCurrentSlide(Math.round(contentOffset.y / viewSize.height));
                }
            }}
        />
    )
}