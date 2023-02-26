import {Movie} from "../Movie/Movie";

const Search = ({movie}) => {

    return (
        <div>
            {movie && <Movie movie={movie}/>}
        </div>
    );
};

export {
    Search
}