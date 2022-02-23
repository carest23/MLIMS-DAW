<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:strip-space elements="*" />

    <xsl:template match="/">
        <html>
            <h1>
                <xsl:value-of select="secondary-school/name"></xsl:value-of>
            </h1>
            <xsl:apply-templates />
        </html>
    </xsl:template>


    <xsl:template match="secondary-school/name"></xsl:template>

    <xsl:template match="secondary-school/web">
        <p>Web Page:
            <a>
                <xsl:attribute name="href">
                    <xsl:value-of select="." />
                </xsl:attribute>
                <xsl:text>&#10;</xsl:text>
                <xsl:value-of select="." />
            </a>
        </p>
    </xsl:template>

    <xsl:template match="cycle/grade"></xsl:template>

    <xsl:template match="cycles">
        <ul>
            <xsl:apply-templates />
        </ul>
    </xsl:template>

    <xsl:template match="cycle/name">

        <li>
            <xsl:value-of select="."></xsl:value-of>
        </li>

    </xsl:template>

</xsl:stylesheet>