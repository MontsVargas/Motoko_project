const singers = [
        {
            id: 1,
            name: "The wekend",
            album: "After Hours",
            photo: './1.jpg',
            year: 2020,
            description: "After Hours is the fourth studio album by Canadian singer The Weeknd. The album was released on March 20, 2020, by XO and Republic Records. It is a follow-up to his 2018 EP My Dear Melancholy, and is his first studio album since Starboy (2016). The album includes guest appearances from Oneohtrix Point Never, Metro Boomin, Sascha Ring of Apparat, and Tame Impala's Kevin Parker. The deluxe edition of the album was released on March 23, 2020, with three additional tracks."
        },

        {
            id: 2,
            name: "CD9",
            album:" CD9",
            photo: "./2.jpg",
            year: 2017,
            description: "CD9 is an album by Mexican band CD9. It was released on August 11, 2017, by Sony Music Mexico. The album was supported by the singles 'No le hablen de amor', 'Modo avión', 'Lío en la cabeza', and 'Prohibido'."
        },

        {
            id: 3,
            name: "Bad Bunny",
            album:"YHLQMDLG",
            photo: "./3.jpg",
            year: 2020,
            description: "YHLQMDLG (an acronym for Yo hago lo que me da la gana, Spanish for 'I do whatever I want') is the second studio album and the third overall by Puerto Rican reggaeton singer Bad Bunny. It was released on February 29, 2020, by Rimas Entertainment. The album was a commercial success, debuting at number two on the US Billboard 200 and number one on the US Top Latin Albums chart. It received critical acclaim and was included in many year-end lists of the best albums of 2020."
        },

        {
            id: 4,
            name: "Kenia Os",
            album:"Cambios de luna",
            photo: "./4.jpg",
            year: 2019,
            description: "Cambios de Luna is the debut studio album by Mexican singer Kenia Os. It was released on August 30, 2019, by Warner Music Mexico. The album features collaborations with artists such as Lasso, Mario Bautista, and Saak. Cambios de Luna was supported by the singles 'Luna Llena', 'Cicatrices', 'Desaparecer', and 'Por Ti'."
        },

        {
            id: 5,
            name: "Luis Miguel",
            album: "Mexico por siempre",
            photo: "./5.jpg",
            year: 2011,
            description: "México por siempre! (English: Mexico Forever!) is the 20th studio album by Mexican singer Luis Miguel. The album was released by Warner Music Mexico on November 24, 2017. It is Luis Miguel's first album in mariachi music. The album won the Grammy Award for Best Regional Mexican Music Album at the 61st Annual Grammy Awards, becoming Miguel's third win in this category."
        },

        {
            id: 6,
            name: "The Beatles",
            album: "Abbey Road",
            photo: "./6.jpg",
            year: 1969,
            description: "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions for the album were the last in which all four Beatles participated. Although Let It Be was the final album that the Beatles completed before the band's dissolution in April 1970, most of the album had been recorded before the Abbey Road sessions began."
        },

        {
            id: 7,
            name: "Aventura",
            album: "Y es por ti",
            photo: "./7.jpg",
            year: 2020,
            description: "Y es por ti is the fifth studio album by Dominican-American bachata band Aventura. It was released on July 12, 2002, by Premium Latin Music. The album was supported by the singles 'Obsesión', 'Hermanita', 'Mi niña cambió', and 'La boda'."
        },

        {
            id: 8,
            name: "Ariana Grande",
            album: "Thank U, Next",
            photo: "./8.jpg",
            year: 2019,
            description: "Thank U, Next is the fifth studio album by American singer Ariana Grande, released on February 8, 2019, by Republic Records. It was released six months after her fourth studio album Sweetener (2018), created in the midst of Grande's personal struggles, including the death of ex-boyfriend Mac Miller and her breakup with then-fiancé Pete Davidson."
        },

        {
            id: 9,
            name: "Daniel me estas matando",
            album: "Daniel me estas matando",
            photo: "./9.jpg",
            year: 2019,
            description: "Daniel, Me Estás Matando is a Mexican band formed in 2012. The band's name is a reference to the Mexican singer Daniela Romo. The band's music is a mix of pop, rock, and electronic music. The band has released two albums: Daniel, Me Estás Matando (2014) and El Desierto ( 2019)."
        },

        {
            id: 10,
            name: "Justin Bieber",
            album: "Justice",
            photo: "./10.jpg",
            year: 2021,
            description: "Justice is the sixth studio album by Canadian singer Justin Bieber. It was released through Def Jam Recordings on March 19, 2021. The album features guest appearances from Khalid, Chance the Rapper, the Kid Laroi, Dominic Fike, Daniel Caesar, Giveon, Beam"
        },

        {
            id: 11,
            name: "Danny Ocean",
            album: "54+1",
            photo: "./11.jpg",
            year: 2019,
            description: "54+1 is the debut studio album by Venezuelan singer-songwriter Danny Ocean. It was released on November 15, 2019, by Atlantic Records. The album was supported by the singles 'Swing', 'Epa Wei', 'Dembow', 'Gime', and 'Cuando Me Acerco a Ti'."
        },

        {
            id: 12,
            name: "Pequeños Musical",
            album: "El último adiós",
            photo: "./12.jpg",
            year: 2001,
            description: "Pequeños Musical is a Mexican musical group formed in 1990. The band's music is a mix of cumbia, salsa, and romantic ballads. The band has released over 20 albums, including El último adiós (2001), Dejarte de amar (2004), and Por siempre (2019)."
        },

        {
            id: 13,
            name: "Alfredo Olivas",
            album: "El Día de los Muertos",
            photo: "./13.jpg",
            year: 2019,
            description: "El Día de los Muertos is the tenth studio album by Mexican singer-songwriter Alfredo Olivas. It was released on November 1, 2019, by Fonovisa Records. The album was supported by the singles 'El Día de los Muertos', 'El Paciente', and 'La Rueda de la Fortuna'."
        },

        {
            id: 14,
            name: "Camila",
            album: "Hacia adentro",
            photo: "./14.jpg",
            year: 2019,
            description: "Hacia Adentro is the fourth studio album by Mexican pop duo Camila. It was released on May 24, 2019, by Sony Music Latin. The album was supported by the singles 'Llámame', 'Te confieso', 'Hacia adentro', and 'La boca'."
        },

        {
            id: 15,
            name: "Rels B",
            album: "Flakk Daniel's LP",
            photo: "./15.jpg",
            year: 2019,
            description: "Flakk Daniel's LP is the third studio album by Spanish rapper Rels B. It was released on November 1, 2019, by Rels Beats. The album was supported by the singles 'La Latina', 'Phuket', 'Made in Taiwan', and 'Cuando todo va mal'."
        }
    ];

export { singers };
