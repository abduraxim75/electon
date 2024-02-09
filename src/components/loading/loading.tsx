import React from 'react';

interface BeautifulLoadingProps {

}

const BeautifulLoading: React.FC<BeautifulLoadingProps> = () => {
    return (
        <div className="beautifulLoading">
            <div className="spinner"></div>
        </div>
    );
};

export default BeautifulLoading;
