const ArrowDown = ({
                       className = "h-6 w-4",
                       ...props
                   }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} {...props} viewBox="0 0 20 16">
            <path fill="#fff" fillRule="nonzero"
                  d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"/>
        </svg>
    );
};

export default ArrowDown;
