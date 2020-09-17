import React from 'react'
import Link from 'next/link'
import { Col, Container, Nav, Navbar as BPNavbar, Row } from 'react-bootstrap'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import classes from './Navbar.module.scss'

import { Logo } from '../'

const Navbar = React.forwardRef(
  (props, bookCatsRef) => {
    const {
      booksCategories,
      search,
      navItems,
      isBooksOpen,
      booksToggle
    } = props

    const { t, i18n } = useTranslation()

    const booksTitle = (
      <div className={classes.CategoriesDropdown}>
        <img
          src="/images/icons/book.png"
          className="icon icon-sm mr-1 img"
          alt="Книги"
        />
        <span className="text-mobile-invisible">
          {t('Categories')}&nbsp;
        </span>
        <img
          src="/images/icons/caret.png"
          alt="expand"
          className={clsx(
            'icon img',
            classes.Rotatable, {
              [classes.Rotate]: isBooksOpen
            })}
        />
      </div>
    )

    return (
      <header className={classes.Navbar}>
        <Container fluid={true} className={classes.Container}>
          <Row>
            <Col>
              <BPNavbar expand="lg">
                <Link href="/">
                  <a>
                    <Logo desktop={true} />
                    <Logo mobile={true} />
                  </a>
                </Link>

                <Nav className={`list position-relative d-flex ${classes.Categories}`}>
                  <a
                    role="button"
                    style={{ cursor: 'pointer' }}
                    onClick={() => booksToggle(!isBooksOpen)}
                    className={classes.ButtonForToggle}
                    ref={bookCatsRef}
                  >
                    {booksTitle}
                  </a>
                  {isBooksOpen && (
                    <ul>
                      {booksCategories.map(cat => {
                        return (
                          <li key={cat.id} className={classes.CategoryItem}>
                            <Link href={`${cat.link}?l=${i18n.language}`}>
                              <a onClick={() => booksToggle(false)}>{t(cat.title)}</a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </Nav>
                {search}
                {navItems}
              </BPNavbar>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
)

Navbar.propTypes = {
  booksCategories: PropTypes.array.isRequired,
  search: PropTypes.object.isRequired,
  navItems: PropTypes.array.isRequired,
  isBooksOpen: PropTypes.bool.isRequired,
  booksToggle: PropTypes.func.isRequired
}
export default React.memo(Navbar)
