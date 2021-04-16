import React, { useState, useEffect } from 'react';
import useRequest from '@hooks/useRequest';
import '@scss/TeGgg.scss';

function TeGgg() {
    const { doPost, isLoading } = useRequest({});
    const [visible, setVisible] = useState(false);
    return (
        <div className="frm-page">
            TeGgg
        </div>
    );
}
export default TeGgg;
