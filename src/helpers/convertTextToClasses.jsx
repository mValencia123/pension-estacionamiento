const convertTextToClasses = (...classes) => classes.filter(Boolean).join(' ');

export default convertTextToClasses;