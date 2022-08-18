import React, { useRef, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
// import BottomSheet from 'react-native-easy-bottomsheet';
// import RBSheet from "react-native-raw-bottom-sheet";

const AddCart = ({ isVisible }: { isVisible: boolean }) => {

    // const refRBSheet = useRef(new RBSheet({}));

    useEffect(() => {
        // if (isVisible) refRBSheet.current.open();
        console.log('isVisible-->', isVisible);

    }, [isVisible])

    return (
        <View>
            {isVisible &&
                <Text>
                    this is bottom sheet
                </Text>
            }
        </View>
        // <RBSheet
        //     ref={refRBSheet}
        //     height={300}
        //     openDuration={250}
        //     closeDuration={250}
        //     customStyles={{
        //         container: {
        //             justifyContent: "center",
        //             alignItems: "center"
        //         }
        //     }}
        // >
        //     <View>
        //         <Text>
        //             bottom sheet
        //         </Text>
        //     </View>
        // </RBSheet>
        /* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */
    )
}

export default AddCart