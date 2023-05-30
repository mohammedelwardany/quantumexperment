
import "./styles.css"
const CircleImage = ({image,title,link,paragraph,linkDisplay}) =>{


    return(

        <div className="CircleImageCintainer">
            <img className="imageCircleImage" src={image}/>
            <h1 className="imageCircleTitle font-gilroy">{title}</h1>
            <p className="imageCircleParagraph font-gilroy">{paragraph}</p>
            <a  style={{display:`${link ? "block" : "none"}`}} href={link} className="imageCircleSubTitle font-gilroy">Know more</a>
        </div>

    )
}
export {CircleImage}