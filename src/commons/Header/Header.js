import React from 'react'

export const Header = ({ text, showButton }) => (
      <div class="header">
            <a class="logo">{text}</a>
            {showButton && (
                  <>
                        <div class="header-right">
                              <a class="active" href={'/dragonsAdd/'}>Create</a>
                        </div>
                  </>
            )}

      </div>
)