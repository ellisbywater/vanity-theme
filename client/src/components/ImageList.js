import React, { Component } from 'react'
import {
    Container,
    Card,
    CardTitle,
    CardBody,
    CardImg,
    Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { getImages } from '../actions/imageActions'
import PropTypes from 'prop-types'

class ImageList extends Component {
    componentWillMount() {
        this.props.getImages()
    }

    render() {
        const { images } = this.props
        return (
            <Container>
                {images.map(({id, previewURL}) => (
                    <Card key={id}>
                        <CardImg top width="100%" src={previewURL} />
                    </Card>
                ))}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    images: state.images
})
export default connect(mapStateToProps, {getImages})(ImageList)