export const Logo = ({className}: {className: string}) => {
    return (
        <svg className={className} viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path d="M0 0L600 0L600 600L0 600L0 0Z" id="path_1" />
                <clipPath id="clip_1">
                    <use xlinkHref="#path_1" clipRule="evenodd" fillRule="evenodd" />
                </clipPath>
            </defs>
            <g id="Group-3-Mask">
                <path d="M0 0L600 0L600 600L0 600L0 0Z" id="Mask" fill="none" fillRule="evenodd" stroke="none" />
                <g clipPath="url(#clip_1)">
                    <g id="Group-3" transform="translate(-101.922424 -97.57971)">
                        <path d="M401.903 116.482C328.521 115.36 254.784 142.796 198.79 198.79C89.0022 308.577 89.0014 486.581 198.79 596.37C254.809 652.389 328.59 679.824 402.006 678.676C475.367 679.781 549.078 652.345 605.056 596.367C714.844 486.579 714.843 308.576 605.056 198.789C549.052 142.785 475.298 115.349 401.903 116.482ZM240.369 231.68C148.747 323.302 148.747 471.852 240.37 563.475C285.095 608.2 343.385 631.093 401.998 632.153C460.56 631.057 518.79 608.165 563.477 563.478C655.101 471.855 655.101 323.304 563.478 231.682C545.962 214.166 526.367 199.999 505.486 189.18L424.807 269.859L401.924 246.976L379.039 269.861L298.359 189.18C277.479 199.999 257.884 214.165 240.369 231.68ZM401.923 218.584L451.335 169.172C435.081 165.363 418.499 163.307 401.892 163.003C385.305 163.311 368.744 165.367 352.51 169.171L401.923 218.584ZM483.868 462.115C515.561 474.139 552.75 467.393 578.275 441.867C612.975 407.168 612.976 350.909 578.275 316.208C543.574 281.508 487.315 281.508 452.616 316.208C421.784 347.04 418.347 394.892 442.304 429.52L401.922 469.901L361.543 429.522C385.5 394.895 382.063 347.042 351.231 316.21C316.531 281.51 260.272 281.51 225.571 316.21C190.87 350.911 190.871 407.17 225.571 441.87C251.096 467.395 288.285 474.142 319.978 462.117L385.22 527.36L401.925 510.655L418.626 527.357L483.868 462.115ZM483.918 347.51C466.505 364.923 466.505 393.153 483.918 410.566C501.331 427.979 529.561 427.979 546.974 410.566C564.386 393.154 564.386 364.924 546.973 347.511C529.56 330.098 501.33 330.098 483.918 347.51ZM319.929 347.512C337.342 364.926 337.342 393.156 319.929 410.569C302.516 427.982 274.286 427.982 256.872 410.569C239.46 393.157 239.46 364.926 256.873 347.513C274.286 330.1 302.517 330.1 319.929 347.512Z" id="Group-Union" fill="currentColor" fillRule="evenodd" stroke="none" />
                    </g>
                </g>
            </g>
        </svg>
    )
}