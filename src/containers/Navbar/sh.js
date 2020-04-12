<div className={classes.sectionDesktop}>
                        <AddIcon />
                        <Typography className={classes.title} noWrap>
                            <Link to="/profile" className={classes.link}>
                                Create Event
                                </Link>
                        </Typography>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <AccountCircle />
                        <Typography className={classes.title} noWrap>
                            <Link to="/profile" className={classes.link}>
                                Sign In
                                </Link>
                        </Typography>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>