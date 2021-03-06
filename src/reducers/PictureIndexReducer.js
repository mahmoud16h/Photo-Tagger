const PictureIndexReducer = (currentPictureIndex=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return currentPictureIndex+1;
        case 'DECREMENT':
            return currentPictureIndex-1;
        default:
            return currentPictureIndex
    }
}

export default PictureIndexReducer;
