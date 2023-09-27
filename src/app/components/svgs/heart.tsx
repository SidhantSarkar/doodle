import * as React from "react"
const HeartSvg = (props: any) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 400 400">
    <path
        d="M 248.8 374.2 C 248.48 374.04 248.8 374.36 247.2 373.4 C 245.6 372.44 243.36 371.32 240.8 369.4 C 238.24 367.48 237.6 366.84 234.4 363.8 C 231.2 360.76 228 357.72 224.8 354.2 C 221.6 350.68 221.12 349.56 218.4 346.2 C 215.68 342.84 214.4 341.56 211.2 337.4 C 208 333.24 204.96 329.24 202.4 325.4 C 199.84 321.56 202.56 324.76 198.4 318.2 C 194.24 311.64 186.4 300.28 181.6 292.6 C 176.8 284.92 176.48 283.64 174.4 279.8 C 172.32 275.96 173.44 277.24 171.2 273.4 C 168.96 269.56 166.72 267.32 163.2 260.6 C 159.68 253.88 156.64 246.68 153.6 239.8 C 150.56 232.92 150.24 231.64 148 226.2 C 145.76 220.76 144.48 217.88 142.4 212.6 C 140.32 207.32 139.52 206.36 137.6 199.8 C 135.68 193.24 134.24 186.68 132.8 179.8 C 131.36 172.92 131.2 171 130.4 165.4 C 129.6 159.8 129.12 157.08 128.8 151.8 C 128.48 146.52 128.64 144.92 128.8 139 C 128.96 133.08 128.96 127.32 129.6 122.2 C 130.24 117.08 130.88 116.44 132 113.4 C 133.12 110.36 134.24 108.76 135.2 107 C 136.16 105.24 135.36 105.88 136.8 104.6 C 138.24 103.32 140.8 101.4 142.4 100.6 C 144 99.8 143.84 100.44 144.8 100.6 C 145.76 100.76 145.6 100.76 147.2 101.4 C 148.8 102.04 150.24 102.36 152.8 103.8 C 155.36 105.24 156.32 105.72 160 108.6 C 163.68 111.48 167.68 114.84 171.2 118.2 C 174.72 121.56 175.2 122.52 177.6 125.4 C 180 128.28 180.96 129.72 183.2 132.6 C 185.44 135.48 186.24 136.6 188.8 139.8 C 191.36 143 193.6 145.72 196 148.6 C 198.4 151.48 199.2 152.44 200.8 154.2 C 202.4 155.96 203.04 156.44 204 157.4 C 204.96 158.36 204.64 158.2 205.6 159 C 206.56 159.8 207.84 160.76 208.8 161.4 C 209.76 162.04 209.76 162.2 210.4 162.2 C 211.04 162.2 211.2 162.36 212 161.4 C 212.8 160.44 213.28 159.8 214.4 157.4 C 215.52 155 216.64 151.8 217.6 149.4 C 218.56 147 218.4 148.12 219.2 145.4 C 220 142.68 220.32 140.44 221.6 135.8 C 222.88 131.16 224.16 126.84 225.6 122.2 C 227.04 117.56 227.36 116.44 228.8 112.6 C 230.24 108.76 230.72 106.52 232.8 103 C 234.88 99.48 235.68 98.84 239.2 95 C 242.72 91.16 246.72 87 250.4 83.8 C 254.08 80.6 254.72 80.76 257.6 79 C 260.48 77.24 262.08 76.12 264.8 75 C 267.52 73.88 269.28 73.88 271.2 73.4 C 273.12 72.92 270.4 71.96 274.4 72.6 C 278.4 73.24 286.08 74.84 291.2 76.6 C 296.32 78.36 297.28 79.8 300 81.4 C 302.72 83 302.08 82.36 304.8 84.6 C 307.52 86.84 309.44 87.64 313.6 92.6 C 317.76 97.56 322.72 105.08 325.6 109.4 C 328.48 113.72 326.56 111 328 114.2 C 329.44 117.4 331.2 120.76 332.8 125.4 C 334.4 130.04 334.88 131 336 137.4 C 337.12 143.8 338.08 150.52 338.4 157.4 C 338.72 164.28 338.08 165.88 337.6 171.8 C 337.12 177.72 336.96 180.76 336 187 C 335.04 193.24 334.88 194.84 332.8 203 C 330.72 211.16 328.16 219.32 325.6 227.8 C 323.04 236.28 322.72 238.36 320 245.4 C 317.28 252.44 314.4 257.88 312 263 C 309.6 268.12 312 262.68 308 271 C 304 279.32 296.96 294.2 292 304.6 C 287.04 315 285.6 317.56 283.2 323 C 280.8 328.44 282.4 326.52 280 331.8 C 277.6 337.08 274.88 342.2 271.2 349.4 C 267.52 356.6 265.92 360.28 261.6 367.8 C 257.28 375.32 253.12 381.56 249.6 387 C 246.08 392.44 246.08 392.12 244 395 C 241.92 397.88 240.96 398.84 239.2 401.4 C 237.44 403.96 236.96 404.92 235.2 407.8 C 233.44 410.68 231.84 413.4 230.4 415.8 C 228.96 418.2 228.96 418.36 228 419.8 C 227.04 421.24 226.24 422.04 225.6 423 C 224.96 423.96 225.28 423.48 224.8 424.6 C 224.32 425.72 223.68 427.64 223.2 428.6 C 222.72 429.56 222.72 429.08 222.4 429.4 C 222.08 429.72 221.76 430.04 221.6 430.2"
        fill="none" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth}></path>
    </svg>
)
export default HeartSvg