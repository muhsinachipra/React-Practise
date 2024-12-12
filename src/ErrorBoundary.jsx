import React from "react"
import propTypes from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.error('some error happened', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>something went wrong</h1>
        }

        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: propTypes.node.isRequired
}

export default ErrorBoundary