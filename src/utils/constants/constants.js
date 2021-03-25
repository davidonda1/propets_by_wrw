import petAvatar from '../Images/petAvatar.png';
import add1 from '../Images/add1.png';
import add2 from '../Images/add2.png';
import logo from '../Images/logo.svg';
import preview_dog from '../Images/preview_dog.png';
import dogHotel from '../Images/dog_hotel.png';
import walkingServices from '../Images/services_walking.png'
import forsteringImg from '../Images/fosteringImg.png'
import vetHelp from '../Images/vetHelp.png';

export const pet_avatar = petAvatar;
export const add_1 = add1;
export const add_2 = add2;
export const logo_ = logo;
export const dog_hotel = dogHotel;
export const walking_services = walkingServices;
export const fostering_img = forsteringImg;
export const vet_help = vetHelp;

export const HOME_PAGE = 'home';
export const GUEST_PAGE = 'guest';
export const LOST_PAGE = 'lost';
export const FOUND_PAGE = 'found';
export const SERVICES = 'services';
export const FAVORITES = 'favorites';
export const USER_PAGE = 'user';
export const HOTELS = 'hotels';
export const WALKING = 'walking';
export const FOSTERING = 'fostering';
export const VET_HELP = 'vetHelp';


export const posts = [{
    user: 'John Goodboi',
    avatar: pet_avatar,
    time: `${new Date().getHours()}h`,
    text: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.' +
        ' Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,' +
        ' bad nymph, for jigs vex! Fox nymphs grab quick-jived waltz. Brick whangs jumpy veldt fox.' +
        ' Bright vixens jump; dozy fowl quack',
    img: preview_dog,
    liked: true,

},
    {
        user: 'John Goodboi',
        time: `${new Date().getHours() + 1}h`,
        text: 'Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.' +
            ' Bright vixens jump; dozy fowl quack',
        img: preview_dog,
        liked: true,
    },]



