export default function ProfilePicture() {
  const imageUrl = "/src/assets/Image.jpg";

  const handleClick = (e) => e.target.style.display = "none";

  return <img src={imageUrl} onClick={(e) => handleClick(e)}></img>;
}
