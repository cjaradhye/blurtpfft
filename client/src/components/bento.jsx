// App.js
import React from 'react';
import './Bento.css'; // Import the CSS file

const Bento = () => {
  return (
    <div className='bentopage'>
        <div className="container">
            <div className="mybigflex colflex">
                <div className='onefirst mybox'>
                </div>
                <div className="rowflex">
                    <div className='kunalbento mybox'>
                    </div>
                    <div className='colflex'>
                        <div className="onesecond mybox">
                        </div>
                        <div className="onesecond mybox">
                        </div>
                    </div>
                </div>
                <div className='rowflex'>
                    <div className='colflex'>
                        <div className='onethird mybox'>
                        </div>
                        <div className='onethird mybox'>
                        </div>
                    </div>
                    <div className='ruhibento mybox'>

                    </div>
                </div>
            </div>

            <div className="mybigflex rowflex">
                <div className='colflex'>
                    <div className='twofirst mybox'>
                    </div>
                    <div className='twosecond mybox'>
                    </div>
                    <div className='twofourth mybox'>
                    </div>
                </div>
                <div className='colflex'>
                    <div className='bhumikabento mybox'>
                    </div>
                    <div className='twothird mybox'>
                    </div>
                    <div className='twofourth mybox'>
                    </div>
                </div>
                
            </div>

            <div className='mybigflex colflex'>
                <div className='colflex'>
                    <div className='threefirst mybox'>
                    </div>
                    <div className='threesecond mybox'>
                    </div>
                    <div className='rowflex'>
                        <div className='threethird mybox'>
                        </div>
                        <div className='threethird mybox'>
                        </div>
                    </div>
                    <div className='harshitbento mybox'>
                    </div>
                    <div className='rowflex'>
                        <div className='threefourth mybox'>
                        </div>
                        <div className='threefourth mybox'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Bento;