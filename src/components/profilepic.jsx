import profile from '../assets/profile.jpg'
function Profile(){
    return(
        <div className="w-full h-full overflow-hidden shadow-xl">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
    )
}
export default Profile;