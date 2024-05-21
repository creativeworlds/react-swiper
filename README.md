# React Swiper

Create swiper in react application

### Installation

```bash 
npm install @creativeworlds/react-swiper
```

### Used Code Snippets
```tsx
<ReactSwiper.Slider className="" name="mySwiper" autoplay spaceBetween={30}  slidesPerView={1}
breakpoints={{
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
}}>

    <ReactSwiper.Slide>Slide 1</ReactSwiper.Slide>
    <ReactSwiper.Slide>Slide 2</ReactSwiper.Slide>
    <ReactSwiper.Slide>Slide 3</ReactSwiper.Slide>
    <ReactSwiper.Slide>Slide 4</ReactSwiper.Slide>
    <ReactSwiper.Slide>Slide 5</ReactSwiper.Slide>
    <ReactSwiper.Slide>Slide 6</ReactSwiper.Slide>

    <ReactSwiper.Next className="mySwiper">Next</ReactSwiper.Next>
    <ReactSwiper.Prev className="mySwiper">Prev</ReactSwiper.Prev>

    <ReactSwiper.Pagination className="mySwiper" />

</ReactSwiper.Slider>
```

### Getting Started
1. **Swiper Slider**
   ```tsx 
   <ReactSwiper.Slider className="" name="mySwiper" autoplay spaceBetween={30}  slidesPerView={1}
   breakpoints={{
       1200: {
         slidesPerView: 3,
         spaceBetween: 30,
       },
       768: {
          slidesPerView: 2,
         spaceBetween: 30,
       }
   }}>
   </ReactSwiper.Slider>
    ```

    * **autoplay** true or false.
    * **name** define swiper name.
    * **spaceBetween** number side between space.
    * **slidesPerView** number side perview in one time.
    * **breakpoints**

        ```ts
        {{
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: true,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: true,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: true,
          }
        }}
        ```

2. **Swiper Navigation**
   ```tsx 
   <ReactSwiper.Next className="mySwiper">Next</ReactSwiper.Next>
   <ReactSwiper.Prev className="mySwiper">Prev</ReactSwiper.Prev>
    ```
2. **Swiper Slide**
   ```tsx 
   <ReactSwiper.Slide>Slide 1</ReactSwiper.Slide>
   <ReactSwiper.Slide>Slide 2</ReactSwiper.Slide>
    ```
2. **Swiper Pagination**
   ```tsx 
   <ReactSwiper.Pagination className="mySwiper" />
    ```
