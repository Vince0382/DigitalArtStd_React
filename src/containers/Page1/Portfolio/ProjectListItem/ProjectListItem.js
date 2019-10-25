import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import ButtonWithTooltip from '../../../../components/UI/Button/ButtonWithTooltip/ButtonWithTooltip';

const ProjectListItem = props => {

    const imageSection = (
        <Card data-background="image" style={{backgroundImage: `url(${props.project.image})`}}>
            <div className="card-icon">
                <i className="nc-icon nc-laptop" style={props.project.style} />
            </div>
        </Card>
    );

    const descSection = (
        <Card className="card-plain">
            <CardBody>
                <h6 className="card-category">{props.project.works}</h6>

                <CardTitle tag="h3">{props.project.title}</CardTitle>

                <p className="card-description">{props.project.description}</p>

                <CardFooter>
                    <a href={props.project.website} target={'_blank'} rel={'noopener'}>
                        <Button className="btn-neutral mr-1" color="link">
                            <i className="fa fa-book mr-1" />
                            Visit website
                        </Button>
                    </a>

                    <ButtonWithTooltip id={`bt_react_${props.index}`} tooltip='React'>
                        <i className="fab fa-react" />
                    </ButtonWithTooltip>

                    <ButtonWithTooltip id={`bt_node_${props.index}`} tooltip='Node.Js'>
                        <i className="fab fa-node" />
                    </ButtonWithTooltip>

                    <ButtonWithTooltip id={`bt_firebase_${props.index}`} tooltip='Hosted on Google Cloud'>
                        <i className="fas fa-cloud" />
                    </ButtonWithTooltip>

                </CardFooter>
            </CardBody>
        </Card>
    );

    return (
        <Row>
            <Col className="ml-auto" md="5">
                { props.align === 'left' ? imageSection : descSection }
            </Col>
            <Col className="mr-auto" md="5">
                { props.align === 'left' ? descSection : imageSection }
            </Col>
        </Row>
    );
}

export default ProjectListItem;