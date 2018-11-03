import React, { Component } from 'react';
import './css/ExplorePage.css';
import RecentPosts from './RecentPosts';
import RecommendedPosts from './RecommendedPosts';

let recentPosts = [
	{
		projectName: "Commissioned Works",
		artistName: "Kuo-Cheng LIAO",
		image: "https://info.datalabsagency.com/hubfs/The_Full_Stack_Design_System_Final_Logo.jpg?t=1534448957862"
	},
	{
		projectName: "EASY PEASY",
		artistName: "Charry Jeon",
		image: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/10/featured-3-1024x584.jpg"
	},
	{
		projectName: "Antaal",
		artistName: "La Tortelleria",
		image: "https://blog.intercomassets.com/wp-content/uploads/2017/03/28134759/Tips_for_Running_Design_Workshops_Logo.jpg"
	},
	{
		projectName: "Point Pop",
		artistName: "Theo Guignard",
		image: "https://png2.kisspng.com/20181024/oft/kisspng-party-summer-illustration-logo-graphic-design-2-17-5bd0b7eccbc852.0170210915404052288347.png"
	},
	{
		projectName: "BunkerToren",
		artistName: "George&Harrison",
		image: "https://avocode.com/static/images/homepage/index/banner-1.png?ver=1"
	},
	{
		projectName: "Acapulco",
		artistName: "Paloma Rincon",
		image: "https://cdn-images-1.medium.com/max/2000/1*zk0iePKWPsd3EmxghhDzoA@2x.png"
	},
	{
		projectName: "Eika",
		artistName: "Mission Design",
		image: "https://cdn.dribbble.com/users/1333774/screenshots/3632396/lingo_signup_flow_04-06.png"
	},
	{
		projectName: "Quantum Energy Squares",
		artistName: "Erretres",
		image: "https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2018/01/18161432/Ben-the-illustrator3.jpg"
	},
	{
		projectName: "Usbek & Rica",
		artistName: "Fago Studio",
		image: "https://avocode.com/static/images/homepage/index/banner-2.png?ver=1"
	},
	{
		projectName: "Alter Social",
		artistName: "Delicious Design League",
		image: "https://www.alterechos.be/wp-content/uploads/2017/04/altersocial.jpg"
	},
	{
		projectName: "Intercom",
		artistName: "Eric Mortensen",
		image: "https://cdn.dribbble.com/users/45889/screenshots/2882673/intercom.jpg"
	},
	{
		projectName: "Dunked",
		artistName: "Echos",
		image: "https://deliciousdesignleague.com/sites/default/files/2017-10/Thumbnail.png"
	}
];


class ExplorePage extends Component {
    constructor(props) {
        super(props);
    }
    
	render() {
		return (
            <div className="explore-page-container">
                <RecentPosts recentPosts={recentPosts}></RecentPosts>
                <RecommendedPosts recentPosts={recentPosts}></RecommendedPosts>
            </div>
		);
	}
}

export default ExplorePage;