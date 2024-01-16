function Image({src, alt, width, height}){
    return <img src={src} alt={alt} style={{width: `${width}`, height: `${height}`}} />
}

export default Image