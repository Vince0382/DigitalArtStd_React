import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './ProjectSkin.css';
import Button from '../../../../../components/UI/Button/Button';
import ScrollTo from '../../../../../hoc/scrollToComponent';
import WorkItem from '../SkinComponents/WorkItem/WorkItem';

import * as actions from '../../../../../store/actions';

// import AnimatedMask from '../../../../../components/Animated/Mask/AnimatedMask';
// import Slide from '../../../../../components/UI/Slide/Slide';

const CONTROLS_COLOR = 'black';

const Image = props => (
    <div className={classes.Image}>
        <img src={props.src} alt='' />
    </div>
);

const Project = props => {

    useEffect(() => {
        console.log(props.location)
        if (!props.location || !props.location.state || !props.location.state.project)
        {
            props.history.push('/');
        }
        else 
        {
            props.onChangeColor();
        }      
    }, []);

    const project = {...props.location.state.project};
    
    const workItems = project.works ? project.works.split('|') : [];

    return (
        <div className={classes.Project + " " + props.className} style={props.style}>

            <div className={classes.Header}>
                <div className={classes.HeaderImage}>
                    <img src={project.images[1]} alt='' />
                </div>

                <div className={classes.HeaderBanner}>
                    <p className={classes.Title}>{project.name}</p>
                    <p className={classes.Text}>{project.description}</p>
                    <div className={classes.Button}>
                        <ScrollTo type='external' element={project.website}>
                            <Button bgColor1='rgba(75, 158, 101, 0.9)' color='#fff'>Visit Website</Button>
                        </ScrollTo>
                    </div>
                </div>


            </div>
            <div className={classes.MiddleLine} />

            <div className={classes.SectionWork}>
                <div className={classes.Title}>Work</div>

                <div className={classes.Works}>
                    {
                        workItems.map( item => <WorkItem key={item}>{item}</WorkItem>)
                    }
                </div>


            </div>

            <div style={{height: '200px'}} />

            <div className={classes.SectionDesign}>
                <div className={classes.Title}>Design</div>
                <div className={classes.DesignBox}>
                    <div className={classes.Text}>
                        <h4>{project.contentTitle}</h4>
                        <div className={classes.Line} />
                        {
                            project.content.map(( content, index ) => <p key={`content_${index}`}>{content}</p>)
                        }
                    </div>
                    <div className={classes.Images}>
                        { project.images.length > 2 ? <Image src={project.images[2]} /> : null }
                        { project.images.length > 3 ? <Image src={project.images[3]} /> : null }
                        { project.images.length > 4 ? <Image src={project.images[4]} /> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onChangeColor: () => dispatch( actions.changeControlsColor( CONTROLS_COLOR ) )
    }
}

export default withRouter( connect( null, mapDispatchToProps )( Project ));