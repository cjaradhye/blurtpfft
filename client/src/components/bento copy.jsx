// App.js
import React from 'react';
import './Bento.css'; // Import the CSS file

const Bento = () => {
  return (
    <div className="container rowflex">
        <div className="mybigflex colflex">
            <div className='onefirst mybox'>
            </div>
            <div className="rowflex">
                <div className='kunalbento'>

                </div>
                <div className='colflex'>
                    <div className="onesecond">
                    </div>
                    <div className="onesecond">
                    </div>
                </div>
            </div>
            <div className='rowflex'>
                <div className='colflex'>
                    <div className='onethird'>
                    </div>
                    <div className='onethird'>
                    </div>
                </div>
                <div className='ruhibento'>

                </div>
            </div>
        </div>

        <div className="mybigflex colflex">
            <div className='colflex'>
                <div className='rowflex'>
                    <div className='twofirst'>
                    </div>
                    <div className='twosecond'>
                    </div>
                    <div className='twofourth'>
                    </div>
                </div>
                <div className='rowflex'>
                    <div className='bhumikabento'>
                    </div>
                    <div className='twothird'>
                    </div>
                    <div className='twofourth'>
                    </div>
                </div>
            </div>
        </div>

        <div className='mybigflex colflex'>
            <div className='colflex'>
                <div className='threefirst'>
                </div>
                <div className='threesecond'>
                </div>
                <div className='rowflex'>
                    <div className='threethird'>
                    </div>
                    <div className='threethird'>
                    </div>
                </div>
                <div className='harshitbento'>
                </div>
                <div className='rowflex'>
                    <div className='threefourth'>
                    </div>
                    <div className='threefourth'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Bento;