import bodyImg from '../../assets2/body/body.png'; 
import './Body.css';

const Body = ({ children }) => {
    return (
        <div
            className="bodyContainer"
            style={{
                backgroundImage: `url(${bodyImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            {children}
        </div>
    );
};

export default Body;
