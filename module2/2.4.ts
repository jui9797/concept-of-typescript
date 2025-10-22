{
    // interface
    interface Developer<T, Y =null> {
        name: string;
        computer: {
          brand: string;
          model: string;
          releaseYear: number;
        };
        smartWatch : T;
        bike? : Y;
    }

    type EmalapWatch = {
        brand: string;
        model: string;
        display?: string;
        heartTrack?: boolean;
        sleepTrack?: boolean;

    }

    type HondaBike = {
        name: string;
        model: string;
    }

    const poorDeveloper: Developer<EmalapWatch> = {
        name: "Persian",
        computer: {
          brand: "Asus",
          model: "X-255UR",
          releaseYear: 2013,
        },
        smartWatch: {
          brand: "Emilab",
          model: "kw66",
          display: "OLED",
        },
      };

    const richDeveloper: Developer<EmalapWatch, HondaBike> = {
        name: "jhankar",
        computer: {
          brand: "Apple",
          model: "X-255UR",
          releaseYear: 2013,
        },
        smartWatch: {
          brand: "Apple",
          model: "kw66",
         heartTrack: true,
         sleepTrack : true
      },
      bike:{
        name: 'honda',
        model: 'honda 125',
      } 
    }  

}