// App.js
import React from 'react';
import './Bento.css';

const Bento = () => {
  return (
    <div className='bentopage'>
      <div className='container'>
        <div className='mybigflex colflex'>
          <div className='onefirst mybox'>
            <h2 className='bentoheading'>blurt what</h2>
            <p className='bentotext'>simply, it is a weekly chaotic, unfiltered, and oddly insightful newsletter disguised as a group chat</p>
          </div>
          <div className='rowflex'>
            <div className='kunalbento mybox'>
              <img src='./bento/kunal.png' className='kunalpic'></img>
              <h2 className='bentoheading'>Kunal</h2>
            </div>
            <div className='colflex'>
              <div className='onesecond mybox'>
                <h2 className='bentoheading'>blurt why</h2>
                <p className='bentotext'>makes news personal, no doomscrolling, just <i>real impact</i> as you see characters you care about live through it</p>
              </div>
              <div className='onesecond mybox'>
                <h2 className='bentoheading'>smart+stupid</h2>
                <p className='bentotext'>one second it's deep analysis, the next, someone's yelling over who stole the remote</p>
              </div>
            </div>
          </div>
          <div className='rowflex'>
            <div className='colflex'>
              <div className='onethird mybox'>
                <h2 className='bentoheading'>not news</h2>
                <p className='bentotext'>it's the conversations after</p>
              </div>
              <div className='onethird mybox'>
                <h2 className='bentoheading'>it’s nice</h2>
                <p className='bentotext'>(out of stuff sorry)</p>
              </div>

            </div>
            <div className='ruhibento mybox'>
              <img src='./bento/ruhi.png' className='ruhipic'></img>
              <h2 className='bentoheading'>Ruhi</h2>
            </div>
          </div>
        </div>

        <div className='mybigflex rowflex'>
          <div className='colflex'>
            <div className='twofirst mybox'>
              <h2 className='bentoheading'>too much?</h2>
              <p className='bentotext'>good. meant to be overwhelming</p>
            </div>
            <div className='twosecond mybox'>
              <h2 className='bentoheading'>news hits</h2>
              <p className='bentotext'>the market crashed.</p>
              <div className='onethirdinside'>
                <p className='bentotext'>Harshit just lost half his savings but won’t admit he’s freaking out.</p>
                <p className='bentotext'>Ruhi is spiraling about her startup.</p>
                <p className='bentotext'>Kunal is pretending it doesn’t affect him.</p>
                <p className='bentotext'>Bhumika...well she saw this coming.</p>
              </div>
              <p className='bentotext'>it's not just headlines - it's their lives and <i>yours too.</i></p>
            </div>
            
            <div className='twofourth mybox'>
              <h2 className='bentoheading'>no breaking news?</h2>
              <p className='bentotext'>blurt will break them anyway</p>
            </div>
          </div>
          <div className='colflex'>
            <div className='bhumikabento mybox'>
              <img src='./bento/bhumika.png' className='bhumikapic'></img>
              <h2 className='bentoheading'>Bhumika</h2>
            </div>
            <div className='twothird mybox'>
              <h2 className='bentoheading'>personal, not passive</h2>
              <p className='bentotext'>we react like real people, not journalists trying to sound neutral</p>
              
            </div>
            <div className='twofourth mybox'>
              <h2 className='bentoheading'>breaking point</h2>
              <div className='innergraph'>
                <img className="graph" src='./bento/graph.png'></img>
              </div>
              
            </div>
          </div>
        </div>

        <div className='mybigflex colflex'>
          <div className='colflex'>
            <div className='threefirst mybox'>
              <h2 className='bentoheading'>#blurtmonday</h2>
              <p className='bentotext'>every monday, you get a fresh, opinion-packed edition of blurt delivered straight to your mail</p>
            </div>
            <div className='threesecond mybox'>
              
              <h2 className='bentoheading'>blurt how</h2>
              <div className='threeinner'>
                <p className='innertext'>news 
                  <img src='./bento/arrow.png' className='arrow'></img>
                  model 
                  <img src='./bento/arrow.png' className='arrow'></img>
                  proofread 
                  <img src='./bento/arrow.png' className='arrow'></img>
                  pdf 
                  <img src='./bento/arrow.png' className='arrow'></img>
                  mail</p>
              </div> 
              <p className='bentotext'>from the world to your inbox—shaped, sharpened, and sent like a group chat that actually cares</p>
            </div>
            <div className='rowflex'>
              <div className='threethird mybox'>
                <h2 className='bentoheading'>built for convos</h2>
                <p className='bentotext'>it's news you actually want to discuss, instead of just consuming and forgetting</p>
              </div>
              <div className='threethird mybox'>
                <h2 className='bentoheading'>no fluff, just chaos</h2>
                <p className='bentotext'>the world is a mess. so are we.</p>
              </div>
            </div>
            <div className='harshitbento mybox'>
              <img src='./bento/harshit.png' className='harshitpic'></img>
              <h2 className='bentoheading'>Harshit</h2>
            </div>
            <div className='rowflex'>
              <div className='threefourthone mybox'>
                <h2 className='bentoheading'>need?</h2>
                <p className='nah bentotext'>nah</p>
              </div>
              <div className='threefourthtwo mybox'>
                <h2 className='bentoheading'>real-time</h2>
                <p className='bentotext'>experience news as it unfolds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
