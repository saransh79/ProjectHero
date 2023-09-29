import React from 'react'

const Viewmore = () => {
  return (
      <div className="viewMoreParent"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        color: "#1E87E4"
      }}>
      <div className="viewMore"
      style={{
        textDecoration: "underline",
        fontWeight: 500
      }}>View more</div>
      <img
        style={{
            width: 16,
        height: 16
        }}
        alt=""
        src="/assets/downarrow.png"
      />
    </div>
  )
}

export default Viewmore