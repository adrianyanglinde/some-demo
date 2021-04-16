import React, { useState, useEffect } from 'react';
import useRequest from '@hooks/useRequest';
import '@scss/TeTd.scss';

function TeTd() {
    const { doPost, isLoading } = useRequest({});
    const [visible, setVisible] = useState(false);
    return (
        <div className="frm-page">
            TeTd
        </div>
    );
}
export default TeTd;
