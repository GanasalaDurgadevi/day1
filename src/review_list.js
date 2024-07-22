
import Review from './review';
function ReviewList(){
    const reviewData = {
        image : "https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg",
        name : "Durga",
        description : "This product is good"
    };
    return (
        <div>
            <h1>Product Reviews</h1>
            <Review
            image = {reviewData.image}
            name = {reviewData.name}
            description={reviewData.description}
            />
        </div>

    );
}
export default ReviewList;