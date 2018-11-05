/**
 * [addCustomProps 给组件添加自定义Props]
 * @param {[type]} WrapComponent [指定的组件]
 * @param {[type]} customProps   [自定义的Props]
 */
const addCustomProps = (WrapComponent, customProps) => {
  const componentRender = WrapComponent.propTypes.render
  const componentDefaultProps = WrapComponent.propTypes.constructor.defaultProps
  WrapComponent.propTypes.constructor.defaultProps = {
    ...componentDefaultProps,
    ...customProps,
  }
  WrapComponent.propTypes.render = function render() {
    const oldProps = this.props
    this.props = {
      ...this.props,
      style: [customProps.style, oldProps.style],
    }
    return componentRender.apply(this)
  }
}

export default addCustomProps
