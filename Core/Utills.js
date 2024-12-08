// Handles utility functions eg(Scaling, color conversions)
export const Utills = {
    scale(value,min,max,newMin,newMax){
        return ((value - min) / (max - min)) * (newMax - newMin ) + newMin;

    },

    getRandomColor(){
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
}