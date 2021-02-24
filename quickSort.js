let arr =[2,3,1,5,4,7,6];

function partition(array, left, right) {
          var pivot = array[Math.floor((right + left) / 2)];
           while (left <= right) {
               while (pivot > array[left]) {
                   left++;
               }
               while (pivot < array[right]) {
                   right--;
               }
               if (left <= right) {
                   var temp = array[left];
                   array[left] = array[right];
                   array[right]= temp;
                   left++;
                   right--;
               }
           }
           return left;
       }

       console.log(partition(arr,0,arr.length))
       console.log(arr)