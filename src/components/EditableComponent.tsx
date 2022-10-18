import React, { Children, ReactElement, ReactNode, ReactPropTypes } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box, Button } from '@mui/material'

export type EditableComponentProps = {}

const EditableComponent = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    console.log(props.children.props.sx)
    //props.children.props.width
    setAnchorEl(null)
  }

  return (
    <div
      onContextMenu={(event) => {
        event.preventDefault()

        handleClick(event)

        return false
      }}
    >
      {props.children}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Color</MenuItem>
        <MenuItem onClick={handleClose}>Animation</MenuItem>
        <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
    </div>
  )
}

export default EditableComponent
