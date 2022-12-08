import PropTypes from 'prop-types';

 export const FeddbackSection = ({title, children}) => {
    return (
    <section style={{width:"300px", margin: "0 auto"}}>
        <h2>{title}</h2>
        <div>{children}</div>
    </section>)
};