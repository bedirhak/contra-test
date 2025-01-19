

import CountUp from 'react-countup';
import Container from '../components/Container';
import { useInView } from 'react-intersection-observer';
import Map from '../assets/images/homepage/worldMap.svg';

const MapNumbers = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });

  return (
    <Container>
      <div className="cg-part-title">

       <div className="cg-part-title">
          <h2>Contra Corporate</h2>
        </div>
      <div className="cg-map-content" style={{ backgroundImage:  `url(${Map})` }}>
        <div className="cg-map-columns">
          <div className="cg-map-rows" ref={ref1}>
            <h6>İhracat</h6>
            <p>{inView1 ? <CountUp end={92} duration={3} /> : 0} Ülke</p>
          </div>
          <div className="cg-map-rows" ref={ref2}>
            <h6>Yurt İçi İştirakler</h6>
            <p>{inView2 ? <CountUp end={18} duration={3} /> : 0}</p>
          </div>
        </div>
        <div className="cg-map-columns">
          <div className="cg-map-rows" ref={ref3}>
            <h6>Yurt Dışı İştirakler</h6>
            <p>{inView3 ? <CountUp end={20} duration={3} /> : 0}</p>
          </div>
          <div className="cg-map-rows" ref={ref4}>
            <h6>Ciro</h6>
            <p>{inView4 ? <CountUp end={1000000} duration={3} /> : 0} $ USD</p>
          </div>
        </div>
        <div className="cg-map-columns">
          <div className="cg-map-rows" ref={ref5}>
            <h6>Ürün Çeşidi</h6>
            <p>{inView5 ? <CountUp end={500} duration={3} /> : 0} +</p>
          </div>
          <div className="cg-map-rows" ref={ref6}>
            <h6>Çalışanlar</h6>
            <p>{inView6 ? <CountUp end={1100} duration={3} /> : 0} +</p>
          </div>
        </div>
        </div>
      </div>

    </Container>
  );
};

export default MapNumbers;