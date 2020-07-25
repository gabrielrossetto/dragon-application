import React from 'react'

export const Header = ({ text, showButton }) => (
      <div className="header">
            <a className="logo">{text}</a>
            {showButton && (
                  <>
                        <div className="header-right">
                              <a className="active" href={'/dragonsAdd/'}>Create</a>
                        </div>
                  </>
            )}

      </div>
)