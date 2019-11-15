// Risup project images
import riseUpBgImage from '../../../assets/img/project/riseup/riseup.jpg';
import riseUp1 from '../../../assets/img/project/riseup/riseup_1.png';
import riseUp2 from '../../../assets/img/project/riseup/riseup_2.png';
import riseUp3 from '../../../assets/img/project/riseup/riseup_3.png';
import riseUp5 from '../../../assets/img/project/riseup/riseup_5.png';


// Andrea project images
import andreaBgImage from '../../../assets/img/project/andrea/andrea.jpg';
import andrea1 from '../../../assets/img/project/andrea/andrea_1.png';
import andrea2 from '../../../assets/img/project/andrea/andrea_2.png';
import andrea3 from '../../../assets/img/project/andrea/andrea_3.png';

// RusTaxiRoma project images
import rusTaxiRomaBgImage from '../../../assets/img/project/rustaxiroma/leonard-cotte.jpg';
import rusTaxiRoma_1 from '../../../assets/img/project/rustaxiroma/rustaxiroma_1.png';
import rusTaxiRoma_2 from '../../../assets/img/project/rustaxiroma/rustaxiroma_2.png';
import rusTaxiRoma_3 from '../../../assets/img/project/rustaxiroma/rustaxiroma_3.png';

export const projects = 
[
    {
        name: 'RiseUp',
        title: 'RiseUp - Consultancy services company',
        description: 'A young and innovative start-up at the cutting edge of technology. Their expertise is focused on agile services, coaching and project management.',
        type: 'Web Site',
        works: 'UI/UX Design | Development | Content',
        website: 'https://riseup.lu',
        style: {color: '#c8c8c8', borderColor: '#c8c8c8'},
        images: [riseUpBgImage, riseUp1, riseUp2, riseUp3, riseUp5],
        contentTitle: 'Clear Design - Easy to read',
        content: [
            'White ton to inspire the simplicity and elegance.',
            'A touch of color to remind the logo of the company and enhance the white.',
            'Limit amount and light effects to avoid the blinking feeling of too heavy animations.'
        ]
    },
    {
        name: 'Andrea Sorrentino',
        title: 'Andrea Sorrentino - Costume designer',
        description: 'Over the years he has endorsed many projects, including international ones, from cinema to opera, from theatre to television commercials. He is also the creator of costumes for many exhibitions in prestigious museums.',
        type: 'Web Site',
        works: 'UI/UX Redesign | Development | Digital Marketing',
        website: 'https://andreasorrentino-fbac1.firebaseapp.com',
        images: [andreaBgImage, andrea1, andrea1, andrea2, andrea3],
        contentTitle: 'Artistic - Theatral',
        content: [
            'Andrea wanted to modernize his web identity with a clean design reminiscent of a theater atmosphere.',
            'A better organization of all of his projects and pictures to improve the user experience',
            'Multi-languages to reach more potential customers'
        ]
    },
    {
        name: 'RusTaxiRoma',
        title: 'RusTaxiRoma - Transport services company',
        description: 'Russian TAXI AND EXCURSIONS in Rome. Passenger transportation, organization of tourism in Rome and Italy.',
        type: 'Web Site',
        works: 'UI/UX Redesign | Development | Digital Marketing',
        website: 'https://rustaxiroma.it',
        images: [rusTaxiRomaBgImage, rusTaxiRoma_1, rusTaxiRoma_1, rusTaxiRoma_2, rusTaxiRoma_3],
        contentTitle: 'Straight to the point!',
        content: [
            'This customer would like a simple website to propose his services',
            'Adapted to his needs, clear and highlighting the services he offers through different sections',
            'Multi-languages to reach more potential customers'
        ]
    }
];