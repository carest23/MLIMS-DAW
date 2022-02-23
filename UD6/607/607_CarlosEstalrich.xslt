<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:strip-space elements="*" />

<xsl:template match="students">
Marks from // <xsl:value-of select="student/credits/credit[1]/name"></xsl:value-of> //
-------------------------------
<xsl:apply-templates />
</xsl:template>

<xsl:template match="student">
<xsl:value-of select="name" />
<xsl:text>&#160;</xsl:text>
<xsl:value-of select="lastname[1]"  /> <xsl:text>&#58;</xsl:text> <xsl:text>&#160;</xsl:text> <xsl:value-of select="credits/credit[1]/mark"></xsl:value-of>
<xsl:text>&#10;</xsl:text>

</xsl:template>


</xsl:stylesheet>
